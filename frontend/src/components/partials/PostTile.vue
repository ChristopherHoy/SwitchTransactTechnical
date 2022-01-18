<template>
    <div class="border rounded-lg hover:shadow p-4 hover:scale-105 transform transition duration-150 overflow-hidden">

        <div class="flex items-center">
                <p class="text-lg mb-2 font-bold">{{postData.title}}</p>
                <div class="flex-grow"></div> <!-- SPACER -->
                <p>{{postData.status}}</p>
        </div>

        <div class="w-full text-base">
            <p>{{postData.description}}</p>
        </div>

        <div class="w-full flex mt-6">
            <div class="flex-grow text-xs"><p>Date Added: {{postData.date}}</p></div>
            <button class="rounded-md bg-red-500 text-white transition px-6 py-1 text-sm transform hover:scale-110 duration-150 mr-2" @click="$emit('delete', postData)">
                Delete Post
            </button>
            <button class="rounded-md bg-yellow-500 text-white transition px-6 py-1 text-sm transform hover:scale-110 duration-150" @click="$emit('edit', postData)">
                Edit Post
            </button>

        </div>

    </div>
</template>

<script>
export default {
    name: "PostTile",

    props: {
        postData: {type: Object, default: {}}
    }
}

</script>
