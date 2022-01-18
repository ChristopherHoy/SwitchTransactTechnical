<template>
    <div class="p-2">

        <div class="flex w-full items-center mb-1">
            <label class="text-base font-bold w-36">Title</label>
            <input class="flex-grow border rounded-md border-gray-300 px-2 outline-none focus:ring-1 focus:ring-blue-400 h-9 disabled:opacity-40" type="text" v-model="formData.title"  @input="validate">
        </div>
        <div class="flex mb-3">
            <div class="w-36 "></div>
            <p v-if="validationMessages.title !== ''" class="leading-3 text-sm text-red-500">{{validationMessages.title}}</p>
        </div>

        <div class="flex w-full mb-1">
            <label class="text-base font-bold w-36 self-start">Description</label>
            <textarea class="flex-grow border rounded-md border-gray-300 px-2 outline-none focus:ring-1 focus:ring-blue-400 h-32 disabled:opacity-40 align-top" v-model="formData.description"  @input="validate"></textarea>
        </div>
        <div class="flex mb-3">
            <div class="w-36 "></div>
            <p v-if="validationMessages.description !== ''" class="leading-3 text-sm text-red-500">{{validationMessages.description}}</p>
        </div>

        <div class="flex w-full items-center mb-1">
            <label class="text-base font-bold w-36">Date</label>
            <input class="flex-grow border rounded-md border-gray-300 px-2 outline-none focus:ring-1 focus:ring-blue-400 h-9" type="date" v-model="formData.date"  @input="validate">
        </div>
        <div class="flex mb-3">
            <div class="w-36"></div>
            <p v-if="validationMessages.date !== ''" class="leading-3 text-sm text-red-500">{{validationMessages.date}}</p>
        </div>

        <div class="flex w-full items-center mb-1">
            <label class="text-base font-bold w-36">Status</label>
            <select class="flex-grow border rounded-md border-gray-300 px-2 outline-none focus:ring-1 focus:ring-blue-400 h-9" v-model="formData.status"  @change="validate">
                <option value="active">Active</option>
                <option value="innactive">Inactive</option>
            </select>
        </div>
        <div class="flex mb-3">
            <div class="w-36"></div>
            <p v-if="validationMessages.status !== ''" class="leading-3 text-sm text-red-500">{{validationMessages.status}}</p>
        </div>

        <div  class="flex w-full items-center mb-2">
            <div class="flex-grow"></div>
            <button class="rounded-md bg-green-500 text-white transition px-2 py-1 transform hover:scale-110 duration-150" @click="submit">
                Submit
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: "AddPost",

    props: {
        values: {type: Object, default: () => {return {}}},
        edit: {type: Boolean, default: false}
    },

    data: function data() {
        return {
            formData: {
                title: '',
                description: '',
                date: '',
                status: ''
            },
            validationMessages: {
                title: '',
                description: '',
                date: '',
                status: ''
            },
        }
    },

    mounted() {
        if (this.values !== null) {
            this.values.date = new Date(this.values.date).toISOString().slice(0, 10)
            this.formData = this.values;
        } else {
            this.formData = {
                title: '',
                description: '',
                date: '',
                status: ''
            }
        }
    },

    methods: {
        isEmpty(item) {
            return item === null || item === undefined || item === ''
        },

        validate() {
            let isValid = true;

            for (let key of Object.keys(this.validationMessages)) {
                if (this.isEmpty(this.formData[key])) {
                    this.validationMessages[key] = 'Required';
                    isValid = false;
                } else {
                    this.validationMessages[key] = '';
                }
            }

            return isValid;
        },

        submit() {
            if (this.validate()) {
                this.$emit('submit-data', this.formData)
            }
        }
    }
}

</script>
