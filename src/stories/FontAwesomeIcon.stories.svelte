<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import FontAwesomeIcon from "../lib/FontAwesomeIcon.svelte";
    import { library } from "@fortawesome/fontawesome-svg-core";
    import { fas } from "@fortawesome/free-solid-svg-icons";
    import { far } from "@fortawesome/free-regular-svg-icons";
    import { fab } from "@fortawesome/free-brands-svg-icons";
    library.add(fas, far, fab);

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Example/FontAwesomeIcon",
        component: FontAwesomeIcon,
        tags: ["autodocs"]
    });
</script>

<Story name="Playground" args={{ icon: ["fas", "smile-wink"], size: "5x" }} />

<Story name="Masking" args={{ icon: ["fas", "pencil"], mask: ["fas", "comment"], transform: "shrink-10 up-.5", size: "5x" }} />
