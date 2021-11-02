<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="receivedMessages")
     */
    private $toUser;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="sentMessages")
     */
    private $fromUser;

    /**
     * @ORM\ManyToOne(targetEntity=Band::class, inversedBy="receivedMessages")
     */
    private $toBand;

    /**
     * @ORM\ManyToOne(targetEntity=Band::class, inversedBy="sentMessages")
     */
    private $fromBand;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getToUser(): ?User
    {
        return $this->toUser;
    }

    public function setToUser(?User $toUser): self
    {
        $this->toUser = $toUser;

        return $this;
    }

    public function getFromUser(): ?User
    {
        return $this->fromUser;
    }

    public function setFromUser(?User $fromUser): self
    {
        $this->fromUser = $fromUser;

        return $this;
    }

    public function getToBand(): ?Band
    {
        return $this->toBand;
    }

    public function setToBand(?Band $toBand): self
    {
        $this->toBand = $toBand;

        return $this;
    }

    public function getFromBand(): ?Band
    {
        return $this->fromBand;
    }

    public function setFromBand(?Band $fromBand): self
    {
        $this->fromBand = $fromBand;

        return $this;
    }
}
