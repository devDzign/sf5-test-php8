<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ShopController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private SerializerInterface $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/shop/home", name="shop_home")
     */
    public function index(): Response
    {
        return $this->render(
            'ui/shop/index.html.twig',
            [
                'props' => $this->serializer->serialize(
                    [
                        'text1' => 'test 1 super',
                        'text2' => 'test 2 super',
                    ],
                    'json'
                ),
            ]
        );
    }
}
