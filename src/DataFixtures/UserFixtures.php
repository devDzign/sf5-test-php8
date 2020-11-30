<?php

namespace App\DataFixtures;

use App\Entity\User;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {

        $manager->persist((new User())
            ->setEmail('admin@email.com')
            ->setPlainPassword('password')
            ->setNickname('admin')
            ->setRoles(["ROLE_ADMIN"]));

        $manager->persist((new User())
            ->setEmail('user+1@email.com')
            ->setPlainPassword('password')
            ->setNickname('user+1')
            ->setRoles([]));

        $manager->persist((new User())
            ->setEmail('suspended@email.com')
            ->setPlainPassword('password')
            ->setNickname('suspended')
            ->setSuspendedAt(new DateTimeImmutable())
            ->setRoles([]));

        $manager->flush();
    }
}
