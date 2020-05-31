<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar color="blue" dark flat>
                        <v-toolbar-title>Sign-Up form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form"
                                v-model="valid"
                                lazy-validation>
                            <v-text-field v-model="name"
                                          :counter="10"
                                          :rules="nameRules"
                                          label="Name"
                                          required/>
                            <v-text-field
                                    v-model="id"
                                    v-mask="idMask"
                                    :rules="idRules"
                                    label="id"
                                    required/>

                            <v-text-field v-model="email"
                                          :rules="emailRules"
                                          label="E-mail"
                                          required/>

                            <v-text-field v-model="password"
                                          :rules="passwordRules"
                                          label="Password"
                                          :type="isPassword ? 'password': 'text'"
                                          :append-icon="isPassword ? 'visibility' : 'visibility_off'"
                                          @click:append="() => (isPassword = !isPassword)"
                                          required/>

                            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
                                        label="Do you agree?" required/>
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
                        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
                        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
                    </v-card-actions>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mask}      from 'vue-the-mask'
    import {ValidForm} from '../module/ValidForm'

    export default {
        directives: {
            mask,
        },

        name: 'SignUp',

        data: () => {
            return {
                valid:      true,
                name:       '',
                checkbox:   '',
                nameRules:  [
                    v => ValidForm.validName(v)
                ],
                email:      '',
                emailRules: [
                    v => ValidForm.validEmail(v),
                ],
                id:         '',
                idRules:    [
                    v => ValidForm.validID(v),
                ],
                idMask:     '#########',
                password: '',
                passwordRules:[
                    v => ValidForm.validPassword(v),
                ],
                isPassword: String,
            }
        },

        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>
