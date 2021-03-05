<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Factory\CategoryFactory;
use App\Factory\ProductFactory;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {

        CategoryFactory::new()->many(6)->create(['products' => ProductFactory::new()->many(0, 10)]);

        $manager->persist((new User())
            ->setEmail('admin@email.com')
            ->setPlainPassword('password')
            ->setNickname('admin')
            ->setRoles(["ROLE_ADMIN"]));

        $manager->persist((new User())
                              ->setEmail('dad@email.com')
                              ->setPlainPassword('password')
                              ->setNickname('dad')
                              ->setRoles(["ROLE_DAD"]));

        $manager->persist((new User())
                              ->setEmail('mum@email.com')
                              ->setPlainPassword('password')
                              ->setNickname('mum')
                              ->setRoles(["ROLE_MUM"]));

        $manager->persist((new User())
                              ->setEmail('boy@email.com')
                              ->setPlainPassword('password')
                              ->setNickname('boy')
                              ->setRoles(["ROLE_BOY"]));

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
