<?php

namespace App\Controller;

use App\Entity\ToyRequest;
use App\Form\ToyRequestType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Workflow\WorkflowInterface;

class WorkFlowController extends AbstractController
{

    public function __construct(private WorkflowInterface $toyRequestWorkflow)
    {
    }

    #[Route('/work/flow', name: 'work_flow')]
    public function index(): Response
    {
        return $this->render('work_flow/index.html.twig');
    }

    #[Route('/work/flow/new', name: 'work_flow_request')]
    public function workRequest(Request $request, EntityManagerInterface $entityManager): Response
    {
        $toy = new ToyRequest();

        $toy->setAuthor($this->getUser());

        $form = $this->createForm(ToyRequestType::class, $toy);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $toy = $form->getData();

            try {
                $this->toyRequestWorkflow->apply($toy, 'to_pending');
            } catch (\LogicException $e) {
            }


            $entityManager->persist($toy);
            $entityManager->flush();

            $this->addFlash('success', 'Demande enregistrée');


            return $this->redirectToRoute('work_flow');
        }


        return $this->render('work_flow/request.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/work/flow/demands', name: 'work_flow_demands')]
    public function demands(Request $request, EntityManagerInterface $entityManager): Response
    {

        return $this->render('work_flow/demand.html.twig', [
            'demands' => $entityManager->getRepository(ToyRequest::class)->findAll(),
        ]);
    }

    #[Route('/work/flow/change/{id}/{to}', name: 'work_flow_change')]
    public function change(ToyRequest $toyRequest, string $to, EntityManagerInterface $entityManager): Response
    {

        $test = $this->toyRequestWorkflow->getEnabledTransitions($toyRequest);
//        dd($test);

        try {
            $this->toyRequestWorkflow->apply($toyRequest, $to);
        } catch (\LogicException $e) {
            dd($e);
        }
//        dd($toyRequest);

        $entityManager->persist($toyRequest);
        $entityManager->flush();

        $this->addFlash('success', 'Action enregistrée');

        return  $this->redirectToRoute('work_flow_demands');
    }
}
