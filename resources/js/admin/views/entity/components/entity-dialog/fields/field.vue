<template>
    <div class="field">
        <div style="width: 40%; padding-right: 5px;">
            <text-field label="name" :value="field.name"></text-field>
        </div>
        <div style="width: 40%; padding-right: 5px;">
            <select-field label="type" :value="field.type" :select-options="[
                        {label: 'integer', value: 'integer'},
                        {label: 'string', value: 'string'},
                        {label: 'timestamp', value: 'timestamp'},
                    ]"></select-field>
        </div>
        <div style="width: 30%;">
            <form-button label="remove" v-on:click.native="removeField(field)"></form-button>
        </div>
    </div>

</template>

<script>

import SelectField from "../../../../../components/select-field";
import TextField from "../../../../../components/text-field";
import FormButton from "../../../../../components/button";
import EntityField from "../../../../../models/EntityField";

export default {
    components: {
        SelectField,
        TextField,
        FormButton,
    },

    props: {
        field: {
            type: EntityField
        },
    },

    methods: {
        removeField(field) {
            field.delete();
        }
    }
}

</script>

<style lang="scss">
.field {
    display: flex;
    flex-direction: row;
}
</style>
