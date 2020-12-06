<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CategoryController extends AbstractController
{
    /**
     * @var SerializerInterface
     */
    private SerializerInterface $serializer;

    /**
     * CategoryController constructor.
     *
     * @param SerializerInterface $serializer
     */
    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/shop", name="category", options = { "expose" = true },)
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request): Response
    {
        $categories =  $this->getDoctrine()->getRepository(Category::class)->findAll();
        return $this->render(
            'ui/category/index.html.twig',
            [
                'props' => $this->serializer->serialize(
                    ['categories' => $categories],
                    'json',
                    [
                        "groups" => ["category_read"],
                    ]
                ),
                'categories' => $this->serializer->serialize(
                    $categories,
                    'json',
                    [
                        "groups" => ["category_read"],
                    ]
                ),
                'categoryId' => $request->get('category'),
                "chart" => $this->serializer->serialize(
                    $this->getDoctrine()->getRepository(Category::class)->getChartData(),
                    'json',
                )
            ]
        );
    }

    /**
     * @Route("/api/products", name="api_products")
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function products(Request $request): JsonResponse
    {
        $category = $request->get('category', null);

        $criteria = is_null($category) ? [] : ['category' => $category];

        return $this->json(
            $this->getDoctrine()->getRepository(Product::class)->findBy($criteria),
            200,
            [],
            [
                "groups" => "read_product",
            ]
        );
    }

    /**
     * @Route("/api/chart", name="api_chart")
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function chart(Request $request): JsonResponse
    {
        $chart = $this->getDoctrine()->getRepository(Category::class)->getChartData();

        return $this->json(
            $chart,
            200,
            [],
            [
                "groups" => "read_product",
            ]
        );
    }

    /**
     * @Route("/boot", name="boot")
     * @param Request $request
     *
     * @return Response
     */
    public function bootstrap(Request $request): Response
    {
        return $this->render(
            'ui/bootstrap/index.html.twig',
            [
                "chart" => $this->serializer->serialize(
                    $this->getDoctrine()->getRepository(Category::class)->getChartData(),
                    'json',
                )
            ]
        );
    }
}
