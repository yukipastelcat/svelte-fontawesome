﻿<script>
import FontAwesomeLayers from '../../src/FontAwesomeLayers.svelte';
import FontAwesomeIcon from '../../src/FontAwesomeIcon.svelte';

import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
</script>

<FontAwesomeLayers {...$$props}>
  <FontAwesomeIcon icon={faCircle} style="color: tomato" />
  <FontAwesomeIcon icon={faTimes} transform="shrink-6" inverse={true} />
</FontAwesomeLayers>
