<?php

namespace App\Tests\Functional;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;

class LoginTest extends WebTestCase
{


    public function testIfLoginSuccessFull()
    {
        $client = static::createClient();

        /** @var RouterInterface $router */
        $router = $client->getContainer()->get("router");

        $crawler = $client->request(Request::METHOD_GET, $router->generate("app_login"));

        $form = $crawler->filter("form[name=login]")->form([
            "email" => "admin@email.com",
            "password" => "password"
        ]);

        $client->submit($form);

        $this->assertResponseStatusCodeSame(Response::HTTP_FOUND);

        $client->followRedirect();

        $this->assertRouteSame('index');
    }

    public function provideInvalidCredentials(): iterable
    {
        yield ["fail@email.com", "password"];
        yield ["admin@email.com", "fail"];
    }

    /**
     * @dataProvider provideInvalidCredentials
     *
     * @param string $email
     * @param string $password
     */
    public function testIfCredentialsAreInvalid(string $email, string $password): void
    {
        $client = static::createClient();

        /** @var RouterInterface $router */
        $router = $client->getContainer()->get("router");

        $crawler = $client->request(Request::METHOD_GET, $router->generate("app_login"));

        $form = $crawler->filter("form[name=login]")->form([
            "email" => $email,
            "password" => $password
        ]);

        $client->submit($form);

        $this->assertResponseStatusCodeSame(Response::HTTP_FOUND);

        $client->followRedirect();

        $this->assertSelectorTextContains("div[name=login-form] > div.alert", "Identifiants invalides.");
    }


    public function testIfCsrfTokenIsInvalid(): void
    {
        $client = static::createClient();

        /** @var RouterInterface $router */
        $router = $client->getContainer()->get("router");

        $crawler = $client->request(Request::METHOD_GET, $router->generate("app_login"));

        $form = $crawler->filter("form[name=login]")->form([
            "_csrf_token" => "fail",
            "email" => "admin@email.com",
            "password" => "password"
        ]);

        $client->submit($form);

        $this->assertResponseStatusCodeSame(Response::HTTP_FOUND);

        $client->followRedirect();

        $this->assertSelectorTextContains("div[name=login-form] > div.alert", "Jeton CSRF invalide.");
    }


    public function testIfAccountSuspended(): void
    {
        $client = static::createClient();

        /** @var RouterInterface $router */
        $router = $client->getContainer()->get("router");

        $crawler = $client->request(Request::METHOD_GET, $router->generate("app_login"));

        $form = $crawler->filter("form[name=login]")->form([
            "email" => "suspended@email.com",
            "password" => "password"
        ]);

        $client->submit($form);

        $this->assertResponseStatusCodeSame(Response::HTTP_FOUND);

        $client->followRedirect();

        $this->assertSelectorTextContains("div[name=login-form] > div.alert", "Votre compte est suspendu.");
    }
}
