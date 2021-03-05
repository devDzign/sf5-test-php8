<?php

namespace App\EventSubscriber;

use App\Entity\ToyRequest;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Workflow\Event\Event;

class WorkflowSubscriber implements EventSubscriberInterface
{
    public function __construct(private MailerInterface $mailer)
    {
    }

    public function onWorkflowToyRequestLeaveRequest(Event $event): void
    {
        /** @var ToyRequest $demand */
        $demand =  $event->getSubject();
        $email = (new Email())
            ->from($demand->getAuthor()->getEmail())
            ->to('dad@email.com')
            ->addTo('mum@email.com')
            ->subject('Demande de jouet - ' . $demand->getName())
            ->text('Bonjour maman et Papa, merci de me commander le jouet : ' . $demand->getName());

        $this->mailer->send($email);
    }

    public function onWorkflowToyRequestEnteredReceived(Event $event): void
    {
        /** @var ToyRequest $demand */
        $demand =  $event->getSubject();
        $email = (new Email())
            ->from('papa.neol@email.com')
            ->to($demand->getAuthor()->getEmail())
            ->subject('Ton jouet est la, oh oh oh !')
            ->text('Ton jouet est arriv", amuse toi bien !');

        $this->mailer->send($email);

    }

    public static function getSubscribedEvents()
    {
        return [
            'workflow.toy_request.leave.request' => 'onWorkflowToyRequestLeaveRequest',
            'workflow.toy_request.entered.received' => 'onWorkflowToyRequestEnteredReceived',
        ];
    }
}
