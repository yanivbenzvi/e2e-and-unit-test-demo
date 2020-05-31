import {ValidForm} from '../../src/module/ValidForm'
import {expect} from 'chai'
//const expect = require('chai').expect

describe('ValidForm [unit]', () => {
    describe('#validId', () => {

        it('retrieve false when id is not filled', () => {
            //ASSUME
            const stub1 = undefined

            //ACTION
            const result = ValidForm.validID(stub1)

            //EXPECT
            expect(result).to.be.eql('Id is required')
        })

        it('retrieve false when id length is under or above 9', () => {
            //ASSUME
            const stub1 = 1234 // length is bellow 9.
            const stub2 = 1234567890 //length is above 9.

            //ACTION
            const result1 = ValidForm.validID(stub1)
            const result2 = ValidForm.validID(stub2)

            //EXPECT
            expect(result1).to.be.eql('Id should contain 9 digit')
            expect(result2).to.be.eql('Id should contain 9 digit')
        })

        it('retrieve false when id digit is not valid', () => {
            //ASSUME
            const stub   = 123456789
            //ACTION
            const result = ValidForm.validID(stub)
            //EXPECT
            expect(result).to.be.eql('last digit does not fit to id pattern')
        })

        it('retrieve true when id digit is valid', () => {
            //ASSUME
            const stub   = 543700421
            //ACTION
            const result = ValidForm.validID(stub)
            //EXPECT
            expect(result).to.be.true
        })
    })

    describe('#validPassword', () => {
        it('retrieve false when password is not filled', () => {
            //ASSUME
            const stub1 = undefined

            //ACTION
            const result = ValidForm.validPassword(stub1)

            //EXPECT
            expect(result).to.be.eql('Password is required')
        })

        it('retrieve false when password length does not meet the requirements', () => {
            //ASSUME
            const stub1 = '123'
            const stub2 = '123456789'

            //ACTION
            const result1 = ValidForm.validPassword(stub1)
            const result2 = ValidForm.validPassword(stub2)

            //EXPECT
            expect(result1).to.be.eql('Password length must be between 6-8')
            expect(result2).to.be.eql('Password length must be between 6-8')
        })

        it('retrieve false when password is not contain letters and number', () => {
            //ASSUME
            const stub1 = '123456'

            //ACTION
            const result = ValidForm.validPassword(stub1)

            //EXPECT
            expect(result).to.be.eql('Password complexity does not meet the requirements')
        })
    })

    describe('#validName', () => {
        it('retrieve false when name is not filled', () => {
            //ASSUME
            const stub1 = ''

            //ACTION
            const result = ValidForm.validName(stub1)

            //EXPECT
            expect(result).to.be.eql('Name is required')
        })

        it('retrieve false when name is not contain two words', () => {
            //ASSUME
            const stub1 = 'Yaniv'

            //ACTION
            const result = ValidForm.validName(stub1)

            //EXPECT
            expect(result).to.be.eql('Name should contain at least two words')
        })

        it('retrieve true when name is apply al requirements', () => {
            //ASSUME
            const stub1 = 'Yaniv ben zvi'

            //ACTION
            const result = ValidForm.validName(stub1)

            //EXPECT
            expect(result).to.be.true
        })
    })
})