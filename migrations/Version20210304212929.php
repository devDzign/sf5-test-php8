<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210304212929 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE toy_request (id UUID NOT NULL, author_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, status TEXT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_736D0B65F675F31B ON toy_request (author_id)');
        $this->addSql('COMMENT ON COLUMN toy_request.id IS \'(DC2Type:uuid)\'');
        $this->addSql('COMMENT ON COLUMN toy_request.status IS \'(DC2Type:array)\'');
        $this->addSql('COMMENT ON COLUMN toy_request.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE toy_request ADD CONSTRAINT FK_736D0B65F675F31B FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP TABLE toy_request');
    }
}
