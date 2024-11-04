const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];

const DATA = [
  {
    task: "Add a New Feature",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    notes: "This is a note",
    num: 1,
    feature: { name: "feature1", geometry: "point" },
  },
  {
    task: "Write Integration Tests",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Use Jest",
    num: 3,
    feature: { name: "feature2", geometry: "point" },
  },
  {
    task: "Add Instagram Integration",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "",
    num: 5,

    feature: { name: "feature3", geometry: "point" },
  },
  {
    task: "Cleanup Database",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/02/15"),
    notes: "Remove old data",
    num: 12,

    feature: { name: "feature4", geometry: "point" },
  },
  {
    task: "Refactor API Endpoints",
    status: STATUS_TESTING,
    due: null,
    notes: "",
    num: 13,

    feature: { name: "feature5", geometry: "point" },
  },
  {
    task: "Add Documentation to API",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/09/12"),
    notes: "Add JS Docs to all endpoints",
    num: 4,

    feature: { name: "feature6", geometry: "point" },
  },
  {
    task: "Update NPM Packages",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Upgrade React & Chakra UI",
    num: 1,

    feature: { name: "feature7", geometry: "point" },
  },
  {
    task: "Add a New Feature",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    notes: "This is a note",
    num: 1,
    feature: { name: "feature1", geometry: "point" },
  },
  {
    task: "Write Integration Tests",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Use Jest",
    num: 3,
    feature: { name: "feature2", geometry: "point" },
  },
  {
    task: "Add Instagram Integration",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "",
    num: 5,

    feature: { name: "feature3", geometry: "point" },
  },
  {
    task: "Cleanup Database",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/02/15"),
    notes: "Remove old data",
    num: 12,

    feature: { name: "feature4", geometry: "point" },
  },
  {
    task: "Refactor API Endpoints",
    status: STATUS_TESTING,
    due: null,
    notes: "",
    num: 13,

    feature: { name: "feature5", geometry: "point" },
  },
  {
    task: "Add Documentation to API",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/09/12"),
    notes: "Add JS Docs to all endpoints",
    num: 4,

    feature: { name: "feature6", geometry: "point" },
  },
  {
    task: "Update NPM Packages",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Upgrade React & Chakra UI",
    num: 1,

    feature: { name: "feature7", geometry: "point" },
  },
  {
    task: "Add a New Feature",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    notes: "This is a note",
    num: 1,
    feature: { name: "feature1", geometry: "point" },
  },
  {
    task: "Write Integration Tests",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Use Jest",
    num: 3,
    feature: { name: "feature2", geometry: "point" },
  },
  {
    task: "Add Instagram Integration",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "",
    num: 5,

    feature: { name: "feature3", geometry: "point" },
  },
  {
    task: "Cleanup Database",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/02/15"),
    notes: "Remove old data",
    num: 12,

    feature: { name: "feature4", geometry: "point" },
  },
  {
    task: "Refactor API Endpoints",
    status: STATUS_TESTING,
    due: null,
    notes: "",
    num: 13,

    feature: { name: "feature5", geometry: "point" },
  },
  {
    task: "Add Documentation to API",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/09/12"),
    notes: "Add JS Docs to all endpoints",
    num: 4,

    feature: { name: "feature6", geometry: "point" },
  },
  {
    task: "Update NPM Packages",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Upgrade React & Chakra UI",
    num: 1,

    feature: { name: "feature7", geometry: "point" },
  },
  {
    task: "Add a New Feature",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    notes: "This is a note",
    num: 1,
    feature: { name: "feature1", geometry: "point" },
  },
  {
    task: "Write Integration Tests",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Use Jest",
    num: 3,
    feature: { name: "feature2", geometry: "point" },
  },
  {
    task: "Add Instagram Integration",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "",
    num: 5,

    feature: { name: "feature3", geometry: "point" },
  },
  {
    task: "Cleanup Database",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/02/15"),
    notes: "Remove old data",
    num: 12,

    feature: { name: "feature4", geometry: "point" },
  },
  {
    task: "Refactor API Endpoints",
    status: STATUS_TESTING,
    due: null,
    notes: "",
    num: 13,

    feature: { name: "feature5", geometry: "point" },
  },
  {
    task: "Add Documentation to API",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/09/12"),
    notes: "Add JS Docs to all endpoints",
    num: 4,

    feature: { name: "feature6", geometry: "point" },
  },
  {
    task: "Update NPM Packages",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Upgrade React & Chakra UI",
    num: 1,

    feature: { name: "feature7", geometry: "point" },
  },
  {
    task: "Add a New Feature",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    notes: "This is a note",
    num: 1,
    feature: { name: "feature1", geometry: "point" },
  },
  {
    task: "Write Integration Tests",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Use Jest",
    num: 3,
    feature: { name: "feature2", geometry: "point" },
  },
  {
    task: "Add Instagram Integration",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "",
    num: 5,

    feature: { name: "feature3", geometry: "point" },
  },
  {
    task: "Cleanup Database",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/02/15"),
    notes: "Remove old data",
    num: 12,

    feature: { name: "feature4", geometry: "point" },
  },
  {
    task: "Refactor API Endpoints",
    status: STATUS_TESTING,
    due: null,
    notes: "",
    num: 13,

    feature: { name: "feature5", geometry: "point" },
  },
  {
    task: "Add Documentation to API",
    status: STATUS_IN_PROGRESS,
    due: new Date("2023/09/12"),
    notes: "Add JS Docs to all endpoints",
    num: 4,

    feature: { name: "feature6", geometry: "point" },
  },
  {
    task: "Update NPM Packages",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Upgrade React & Chakra UI",
    num: 1,

    feature: { name: "feature7", geometry: "point" },
  },
];

export default DATA;
