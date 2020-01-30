<script>
import FontAwesomeLayers from '../../src/FontAwesomeLayers.svelte';
import FontAwesomeLayersText from '../../src/FontAwesomeLayersText.svelte';
import FontAwesomeIcon from '../../src/FontAwesomeIcon.svelte';

import { faCircle } from '@fortawesome/free-solid-svg-icons';
</script>

<FontAwesomeLayers>
  <FontAwesomeIcon icon={faCircle} />
  <FontAwesomeLayersText {...$$props} />
</FontAwesomeLayers>
