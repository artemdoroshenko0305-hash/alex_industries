import { MainCompanionCard } from "../components/cards/MainCompanionCard.js";
import { CareerWorkCard } from "../components/cards/CareerWorkCard.js";
import { FinanceCard } from "../components/cards/FinanceCard.js";
import { HealthSportCard } from "../components/cards/HealthSportCard.js";
import { FamilyRelationshipsCard } from "../components/cards/FamilyRelationshipsCard.js";
import { FriendsSocialCard } from "../components/cards/FriendsSocialCard.js";
import { PersonalGrowthCard } from "../components/cards/PersonalGrowthCard.js";
import { LeisureHobbiesCard } from "../components/cards/LeisureHobbiesCard.js";
import { SpiritualityCard } from "../components/cards/SpiritualityCard.js";

export function createAgents() {
  return [
    new MainCompanionCard(),
    new CareerWorkCard(),
    new FinanceCard(),
    new HealthSportCard(),
    new FamilyRelationshipsCard(),
    new FriendsSocialCard(),
    new PersonalGrowthCard(),
    new LeisureHobbiesCard(),
    new SpiritualityCard(),
  ];
}
