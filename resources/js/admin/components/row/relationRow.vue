<template>
    <div class="relation-row">
        <div>{{name}}</div>
        <div>{{ownerEntity}}</div>
        <div>{{inverseEntity}}</div>
        <div>{{type}}</div>
        <div>{{ownerField}}</div>
        <div>{{inverseField}}</div>
        <div>{{ownerRelationAccessor}}</div>
        <div>{{inverseRelationAccessor}}</div>
        <div>{{ownerField}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                default() {
                    return '';
                }
            },

            ownerEntity: {
                default() {
                    return '';
                }
            },

            inverseEntity: {
                default() {
                    return '';
                }
            },

            type: {
                default() {
                    return '';
                }
            },

            ownerRelationAccessor: {
                default() {
                    return '';
                }
            },
            inverseRelationAccessor: {
                default() {
                    return '';
                }
            },
            ownerField: {
                default() {
                    return 'id'
                }
            },

            inverseField: {
                default() {
                    return `${this.entity}_id`;
                }
            }
        }
    }
</script>



<style lang="scss">

.relation-row {
    display: flex;
    flex-direction: row;
    width: 1800px;
    > div {
        flex-grow: 1;
        padding: 5px;
        height: 30px;
        border-bottom: 1px solid rgba(233,233,233, 0.4);
    }
}


</style>
