import React from "react";

export default function ParkRules() {
  const rules = [
    {
      title: "HEALTH FIRST",
      desc: `All dogs must be vaccinated for bordetella, rabies, and DHPP (distemper, hepatitis, parainfluenza and parvovirus). Dog parents must provide proof of vaccinations
    in advance by emailing it to us at growlerzseattle@gmail.com or registering their dog with us here.

    ${`\n`}
    ${(<br />)}

    All dogs over 7 months of age must be neutered or spayed.`,
    },
    {
      title: "PLAY NICE",
      desc: `All dogs who enter our play park must be properly socialized and get along well with other dogs. Dogs showing aggressive behavior, excessive barking, or destructive actions may have to be removed from the play park.


      Psst - does your dog have trouble playing well with others? Check out our short-term, private rental option to exercise your dog in a safe space.`,
    },
    {
      title: "SCOOP THE POOP",
      desc: `You know the drill. If/when your dog poops in the play park it is your responsibility to pick it up and properly dispose of it in one of our provided trash cans. We have poop bags available so you have no excuse!`,
    },
  ];
  return (
    <div>
      {rules.map((rule) => (
        <div key={rule.title}>
          {rule.title} <br /> {rule.desc}
        </div>
      ))}
    </div>
  );
}
