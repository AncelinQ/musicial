<?php

namespace App\Entity;

use App\Repository\BandRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BandRepository::class)
 */
class Band
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="bands")
     */
    private $members;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="managedBands")
     */
    private $bandManagers;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="createdBands")
     * @ORM\JoinColumn(nullable=false)
     */
    private $createdBy;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $contact;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $experience;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $objective;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $artistRef;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $songRef;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $since;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="favoriteBands")
     */
    private $users;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="favoriteBands")
     */
    private $userLikes;

    /**
     * @ORM\ManyToMany(targetEntity=Band::class, inversedBy="bandLikes")
     */
    private $favoriteBands;

    /**
     * @ORM\ManyToMany(targetEntity=Band::class, mappedBy="favoriteBands")
     */
    private $bandLikes;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="bandLikes")
     */
    private $favoriteUsers;

    /**
     * @ORM\OneToMany(targetEntity=Advertisement::class, mappedBy="bandOwner")
     */
    private $advertisements;

    /**
     * @ORM\ManyToMany(targetEntity=Style::class, mappedBy="bands")
     */
    private $styles;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="toBand")
     */
    private $receivedMessages;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="fromBand")
     */
    private $sentMessages;

    /**
     * @ORM\ManyToMany(targetEntity=Advertisement::class, inversedBy="bandLikes")
     */
    private $favoriteAds;

    public function __construct()
    {
        $this->members = new ArrayCollection();
        $this->bandManagers = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->userLikes = new ArrayCollection();
        $this->favoriteBands = new ArrayCollection();
        $this->bandLikes = new ArrayCollection();
        $this->favoriteUsers = new ArrayCollection();
        $this->advertisements = new ArrayCollection();
        $this->styles = new ArrayCollection();
        $this->receivedMessages = new ArrayCollection();
        $this->sentMessages = new ArrayCollection();
        $this->favoriteAds = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getMembers(): Collection
    {
        return $this->members;
    }

    public function addMember(User $member): self
    {
        if (!$this->members->contains($member)) {
            $this->members[] = $member;
        }

        return $this;
    }

    public function removeMember(User $member): self
    {
        $this->members->removeElement($member);

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getBandManagers(): Collection
    {
        return $this->bandManagers;
    }

    public function addBandManager(User $bandManager): self
    {
        if (!$this->bandManagers->contains($bandManager)) {
            $this->bandManagers[] = $bandManager;
        }

        return $this;
    }

    public function removeBandManager(User $bandManager): self
    {
        $this->bandManagers->removeElement($bandManager);

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getContact(): ?string
    {
        return $this->contact;
    }

    public function setContact(?string $contact): self
    {
        $this->contact = $contact;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getFavoriteUsers(): Collection
    {
        return $this->favoriteUsers;
    }

    public function addFavoriteUser(User $favoriteUser): self
    {
        if (!$this->favoriteUsers->contains($favoriteUser)) {
            $this->favoriteUsers[] = $favoriteUser;
        }

        return $this;
    }

    public function removeFavoriteUser(User $favoriteUser): self
    {
        $this->favoriteUsers->removeElement($favoriteUser);

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getFavoriteBands(): Collection
    {
        return $this->favoriteBands;
    }

    public function addFavoriteBand(self $favoriteBand): self
    {
        if (!$this->favoriteBands->contains($favoriteBand)) {
            $this->favoriteBands[] = $favoriteBand;
        }

        return $this;
    }

    public function removeFavoriteBand(self $favoriteBand): self
    {
        $this->favoriteBands->removeElement($favoriteBand);

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getBandLikes(): Collection
    {
        return $this->bandLikes;
    }

    public function addBandLike(self $bandLike): self
    {
        if (!$this->bandLikes->contains($bandLike)) {
            $this->bandLikes[] = $bandLike;
            $bandLike->addFavoriteBand($this);
        }

        return $this;
    }

    public function removeBandLike(self $bandLike): self
    {
        if ($this->bandLikes->removeElement($bandLike)) {
            $bandLike->removeFavoriteBand($this);
        }

        return $this;
    }

    public function getExperience(): ?string
    {
        return $this->experience;
    }

    public function setExperience(?string $experience): self
    {
        $this->experience = $experience;

        return $this;
    }

    public function getObjective(): ?string
    {
        return $this->objective;
    }

    public function setObjective(?string $objective): self
    {
        $this->objective = $objective;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getArtistRef(): ?string
    {
        return $this->artistRef;
    }

    public function setArtistRef(?string $artistRef): self
    {
        $this->artistRef = $artistRef;

        return $this;
    }

    public function getSongRef(): ?string
    {
        return $this->songRef;
    }

    public function setSongRef(?string $songRef): self
    {
        $this->songRef = $songRef;

        return $this;
    }

    public function getSince(): ?int
    {
        return $this->since;
    }

    public function setSince(?int $since): self
    {
        $this->since = $since;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUserLikes(): Collection
    {
        return $this->userLikes;
    }

    public function addUserLike(User $userLike): self
    {
        if (!$this->userLikes->contains($userLike)) {
            $this->userLikes[] = $userLike;
            $userLike->addFavoriteBand($this);
        }

        return $this;
    }

    public function removeUserLike(User $userLike): self
    {
        if ($this->userLikes->removeElement($userLike)) {
            $userLike->removeFavoriteBand($this);
        }

        return $this;
    }

    /**
     * @return Collection|Advertisement[]
     */
    public function getAdvertisements(): Collection
    {
        return $this->advertisements;
    }

    public function addAdvertisement(Advertisement $advertisement): self
    {
        if (!$this->advertisements->contains($advertisement)) {
            $this->advertisements[] = $advertisement;
            $advertisement->setBandOwner($this);
        }

        return $this;
    }

    public function removeAdvertisement(Advertisement $advertisement): self
    {
        if ($this->advertisements->removeElement($advertisement)) {
            // set the owning side to null (unless already changed)
            if ($advertisement->getBandOwner() === $this) {
                $advertisement->setBandOwner(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Style[]
     */
    public function getStyles(): Collection
    {
        return $this->styles;
    }

    public function addStyle(Style $style): self
    {
        if (!$this->styles->contains($style)) {
            $this->styles[] = $style;
            $style->addBand($this);
        }

        return $this;
    }

    public function removeStyle(Style $style): self
    {
        if ($this->styles->removeElement($style)) {
            $style->removeBand($this);
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getReceivedMessages(): Collection
    {
        return $this->receivedMessages;
    }

    public function addReceivedMessage(Message $receivedMessage): self
    {
        if (!$this->receivedMessages->contains($receivedMessage)) {
            $this->receivedMessages[] = $receivedMessage;
            $receivedMessage->setToBand($this);
        }

        return $this;
    }

    public function removeReceivedMessage(Message $receivedMessage): self
    {
        if ($this->receivedMessages->removeElement($receivedMessage)) {
            // set the owning side to null (unless already changed)
            if ($receivedMessage->getToBand() === $this) {
                $receivedMessage->setToBand(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getSentMessages(): Collection
    {
        return $this->sentMessages;
    }

    public function addSentMessage(Message $sentMessage): self
    {
        if (!$this->sentMessages->contains($sentMessage)) {
            $this->sentMessages[] = $sentMessage;
            $sentMessage->setFromBand($this);
        }

        return $this;
    }

    public function removeSentMessage(Message $sentMessage): self
    {
        if ($this->sentMessages->removeElement($sentMessage)) {
            // set the owning side to null (unless already changed)
            if ($sentMessage->getFromBand() === $this) {
                $sentMessage->setFromBand(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Advertisement[]
     */
    public function getFavoriteAds(): Collection
    {
        return $this->favoriteAds;
    }

    public function addFavoriteAd(Advertisement $favoriteAd): self
    {
        if (!$this->favoriteAds->contains($favoriteAd)) {
            $this->favoriteAds[] = $favoriteAd;
        }

        return $this;
    }

    public function removeFavoriteAd(Advertisement $favoriteAd): self
    {
        $this->favoriteAds->removeElement($favoriteAd);

        return $this;
    }

}
