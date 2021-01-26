<template>
  <div class="example-panel relative overflow-hidden my-4 text-base">
    <div class="example-panel__component rounded-t-md overflow-hidden border p-10" v-if="$slots && $slots.component">
      <div class="normal-case text-sm">
        <slot name="component" />
      </div>
    </div>
    <div class="example-panel__codeblock overflow-hidden rounded-b-md" v-if="$slots && $slots.code">
      <pre class="
        scrollbar-none overflow-x-auto p-6
        text-sm leading-snug language-html
        text-white bg-black bg-opacity-75"
      ><code class="language-html"><span class="token string"><slot name="code" /></span></code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleBlock'
}
</script>