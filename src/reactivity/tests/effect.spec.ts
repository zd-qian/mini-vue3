import { effect } from "../effect";
import { reactive } from "../reactive";
describe("effect", () => {
  it("hpppy path", () => {
    const user = reactive({
      age: 10,
    });
    let nextAge;
    effect(() => {
      nextAge = user.age + 1;
    });
    expect(nextAge).toBe(11);
    user.age++;
    expect(nextAge).toBe(12);
    user.age--;
    expect(nextAge).toBe(11);
  });
  it("should return runner when call effect", () => {
    let num = 8;
    const runner = effect(() => {
      num++;
      return "num";
    });
    expect(num).toBe(9);
    const r = runner();
    expect(num).toBe(10);
    expect(r).toBe("num");
  });
});
