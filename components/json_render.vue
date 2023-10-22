<template>
    <!-- JSON Render Box -->
    <div class="flex p-4 border border-slate-200 w-1/2">
        <div class="relative w-full overflow-hidden mt-2 mb-2 pt-2">
            <span class="absolute top-0 left-4 px-2 py-1 text-base uppercase rounded-b-lg text-inherit bg-yellow-300">json</span>
            <div class="flex justify-end">
                <div class="flex">
                    <span class="absolute right-28 top-0 py-1 text-base text-emerald-500" v-if="copied">Copied Code &#10003;</span>
                    <button class="absolute top-0 right-0 px-2 py-1 text-base rounded-b-lg text-white bg-black dark:text-black dark:bg-white" @click="copy" @mouseleave="copied = false">Copy Code</button>
                </div>
            </div>
            <div class="flex relative w-full mt-14">
                <pre class="flex overflow-x-auto p-2 leading-relaxed counter-reset:lines">
                    <code class="w-full flex-col" v-html="syntaxHighlight(mushJSON)" />
                </pre>
            </div>
        </div>
    </div>
</template>

<script setup>
const mushJSON = useState('mushJSON')
const copied = ref(false)

const syntaxHighlight = (json) => {
    json = JSON.stringify(json, undefined, 4);
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
    json = json.split(/\r?\n/).map((item) => {return '<span class="line">' + item + '</span><br>'}).join('');
    return json;
}

const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(mushJSON.value, undefined, 4));
    copied.value = true;
}
</script>

<style>
.string { color: darkorange; }
.number { color: darkgreen; }
.boolean { color: blue; }
.null { color: blue; }
.key { color: darkslateblue; }
.line {
    counter-increment: lines;
}
.line::before {
    content: counter(lines);
    margin-right: 1.5rem;
    color: rgba(115, 138, 148, 0.4);
}
</style>