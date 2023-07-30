import { observable } from "@legendapp/state";

const global$ = observable({
  profile: {
    name: "Shrijan",
  },
  count: 0,
});

export default global$;
