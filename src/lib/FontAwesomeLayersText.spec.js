// @ts-nocheck
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/svelte";
import LayersText from "./__mocks__/LayersText.svelte";
import FontAwesomeLayersText from "./FontAwesomeLayersText.svelte";

function renderLayersTextMock(props) {
  const result = render(LayersText, {
    props,
  });
  return result.container;
}

describe(`🧱 ${FontAwesomeLayersText.name}`, () => {
  test("correctly composes layers", () => {
    const memeText = "DABURU KRASHU IKOZE!";
    const container = renderLayersTextMock({ value: memeText });
    const svg = container.querySelector("svg");
    const text = container.querySelector("span");
    expect(svg.dataset.prefix).toBe("fas");
    expect(svg.dataset.icon).toBe("circle");
    expect(text.innerHTML).toBe(memeText);
  });
  test("does apply passed class attribute", () => {
    const CUSTOM_CLASS = "custom-class";
    const container = renderLayersTextMock({ class: CUSTOM_CLASS });
    const text = container.querySelector("span");
    expect([...text.classList].includes(CUSTOM_CLASS)).toBe(true);
  });
  test("does apply passed style attribute", () => {
    const CUSTOM_STYLE = "color: red;";
    const container = renderLayersTextMock({ style: CUSTOM_STYLE });
    const text = container.querySelector("span");
    expect(text.getAttribute("style")).toBe(CUSTOM_STYLE);
  });
  describe("correctly handles properties", () => {
    const NOT_PROVIDED_CASE = "not provided";
    describe("`value` property", () => {
      test("string value", () => {
        const memeText = "KANSEI DORIFTO";
        const container = renderLayersTextMock({ value: memeText });
        const text = container.querySelector("span");
        expect(text.innerHTML).toBe(memeText);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderLayersTextMock();
        const text = container.querySelector("span");
        expect(text.innerHTML).toBe("");
      });
    });
    describe("`transform` property", () => {
      test("value as string", () => {
        const container = renderLayersTextMock({
          value: "Misfiringu system",
          transform: "rotate-95",
        });
        const text = container.querySelector("span");
        expect(
          text.style.getPropertyValue("transform").includes("rotate(95deg)"),
        ).toBe(true);
      });
      test("value as object", () => {
        const container = renderLayersTextMock({
          value: "Gamu tapu desumache",
          transform: {
            rotate: 95,
          },
        });
        const text = container.querySelector("span");
        expect(
          text.style.getPropertyValue("transform").includes("rotate(95deg)"),
        ).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderLayersTextMock({
          value: "ULTRA-SUPER-LATE-BRAKING!",
        });
        const text = container.querySelector("span");
        expect(text.style.getPropertyValue("transform")).toBe("");
      });
    });
    describe("`counter` property", () => {
      test("false", () => {
        const container = renderLayersTextMock({
          value: "Sil-80",
          counter: false,
        });
        const counter = container.querySelector(".fa-layers-counter");
        expect(counter).toBe(null);
      });
      test("true", () => {
        const hachiRoku = "86";
        const container = renderLayersTextMock({
          value: hachiRoku,
          counter: true,
        });
        const counter = container.querySelector(".fa-layers-counter");
        expect(counter).not.toBe(null);
        expect(counter.innerHTML).toBe(hachiRoku);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderLayersTextMock();
        const counter = container.querySelector(".fa-layers-counter");
        expect(counter).toBe(null);
      });
    });
    describe("`position` property", () => {
      const value = "Cappuccino";
      const [
        TOP_RIGHT_CLASS,
        TOP_LEFT_CLASS,
        BOTTOM_RIGHT_CLASS,
        BOTTOM_LEFT_CLASS,
      ] = ["top-right", "top-left", "bottom-right", "bottom-left"].map(
        (item) => `fa-layers-${item}`,
      );
      test('"top-right"', () => {
        const container = renderLayersTextMock({
          value,
          position: "top-right",
        });
        const text = container.querySelector("span");
        expect([...text.classList].includes(TOP_RIGHT_CLASS)).toBe(true);
      });
      test('"top-left"', () => {
        const container = renderLayersTextMock({
          value,
          position: "top-left",
        });
        const text = container.querySelector("span");
        expect([...text.classList].includes(TOP_LEFT_CLASS)).toBe(true);
      });
      test('"bottom-right"', () => {
        const container = renderLayersTextMock({
          value,
          position: "bottom-right",
        });
        const text = container.querySelector("span");
        expect([...text.classList].includes(BOTTOM_RIGHT_CLASS)).toBe(true);
      });
      test('"bottom-left"', () => {
        const container = renderLayersTextMock({
          value,
          position: "bottom-left",
        });
        const text = container.querySelector("span");
        expect([...text.classList].includes(BOTTOM_LEFT_CLASS)).toBe(true);
      });
      test(NOT_PROVIDED_CASE, () => {
        const container = renderLayersTextMock({
          value,
        });
        const text = container.querySelector("span");
        expect(
          [...text.classList].every(
            (item) =>
              ![
                TOP_RIGHT_CLASS,
                TOP_LEFT_CLASS,
                BOTTOM_RIGHT_CLASS,
                BOTTOM_LEFT_CLASS,
              ].includes(item),
          ),
        ).toBe(true);
      });
    });
  });
});
