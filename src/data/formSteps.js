import { ReactComponent as IndividualIcon } from "assets/IndividualIcon.svg";
import { ReactComponent as TeamIcon } from "assets/TeamIcon.svg";

const FORM_STEPS = [
  {
    heading: "Welcome! First things first...",
    desc: "You can always change them later.",
    fields: [
      {
        key: "fullName",
        label: "Full Name",
        placeholder: "Steve Jobs",
      },
      {
        key: "displayName",
        label: "Display Name",
        placeholder: "Steve",
      },
    ],
  },
  {
    heading: "Let's set up a home for all your work",
    desc: "You can always create another workspace later.",
    fields: [
      {
        key: "workspaceName",
        label: "Workspace Name",
        placeholder: "Eden",
      },
      {
        fixedInput: "www.eden.com/",
        key: "workspaceURL",
        label: "Workspace URL",
        optional: true,
        placeholder: "Example",
      },
    ],
  },
  {
    heading: "How are you planning to use Eden?",
    desc: "We'll streamline your setup experience accordingly.",
    optionKey: "plan",
    options: [
      {
        heading: "For myself",
        Icon: IndividualIcon,
        desc: "Write better. Think more clearly. Stay organized.",
        value: "individual",
      },
      {
        heading: "With my team",
        Icon: TeamIcon,
        desc: "Wikis, docs, tasks & projects, all in one place.",
        value: "team",
      },
    ],
  },
  {
    heading: "Congratulations, Eren!",
    desc: "You have completed onboarding, you can start using the Eden!",
  },
];

export default FORM_STEPS;
