<template>
    <div class="p-6 bg-gray-50">

        <div class="w-100 shadow p-6 border bg-white rounded-lg" >
            <div class="flex pt-4 pb-6">
                <h1  class="text-3xl mx-2 text-gray-600 pb-2 flex-grow">Posts</h1>
                <button class="rounded-md bg-blue-500 text-white transition px-6 py-0.5 transform whitespace-nowrap hover:scale-110 duration-150" @click="newPost()">
                    + New Post
                </button>
            </div>

            <div  class="grid gap-4 grid-cols-1 w-100 bg-white">
                <post-tile class="bg-stone-100" v-for="(item, index) of postData" :key="index" :postData="item" @edit="newPost" @delete="remove"></post-tile>
            </div>
        </div>

    </div>

    <modal :show="addModal.show" @close="addModal.close()">
        <template v-slot:header>
            <h1 class="text-3xl text-gray-600">Add Post</h1>
        </template>

        <add-post class="w-100" :values="addModal.data" @submit-data="addPost" :edit="addModal.edit"></add-post>

    </modal>

</template>

<script>

import AddPost from "../components/partials/AddPost.vue"
import PostTile from "../components/partials/PostTile.vue"
import Modal from "../components/tools/Modal.vue"

export default {
    name: "Posts",

    components: {
      AddPost, PostTile, Modal
    },

    data: function data() {
        return {
            postData: [],
            addModal: {
                show: false,
                data: null,
                close: () => {
                    this.addModal.data = null;
                    this.addModal.show = false;
                }
            }
        }
    },

    mounted() {
        this.fetchPosts()
    },

    methods: {
        fetchPosts() {
            this.axios.get('/posts/list').then((res) => {
                this.postData = res.data;
                toast.success("Success")
            }).catch((err) => {
                toast.error("ERROR: Failed to fetch posts")
            })
        },

        newPost(data=null) {
            this.addModal.data = data;
            this.addModal.show = true;
        },

        updatePost(data) {
            this.axios.post('/posts/update', data).then((res) => {
                this.fetchPosts();
                this.addModal.show = false;
            }).catch((err) => {
                toast.error("ERROR: Failed to update post")
            })
        },

        remove(data) {
            this.axios.post('/posts/delete', data).then((res) => {
                this.fetchPosts();
            }).catch((err) => {
                toast.error("ERROR: Failed to delete post")
            })
        },

        addPost(data) {

            if (data.id !== undefined) {
                return this.updatePost(data)
            }

            this.axios.post('/posts/create', data).then((res) => {
                this.fetchPosts();
                this.addModal.show = false;
            }).catch((err) => {
                toast.error("ERROR: Failed to add post")
            })
        }
    }
}

</script>
