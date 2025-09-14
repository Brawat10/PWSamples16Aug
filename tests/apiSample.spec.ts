import {test, expect } from '@playwright/test'
import bookingDetail from '../../PWSamples16Aug/testData/booking.json'

//GET Method

    test.describe('API Testing - CRUD', () => {
        const baseURL= 'http://restful-booker.herokuapp.com/'
        test('Should get the booking details', async ({ request }) => {
            const response = await request.get('/booking/15', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response.status())
            expect(response.ok()).toBeTruthy()
            console.log(await response.json())
            const resBody = await response.json()
            expect(resBody.firstname).toBe('Josh')
            expect(resBody.lastname).toBe('Allen')
            expect(resBody.totalprice).toBe(111)
        })

//POST Method

    test('Create new booking', async ({ request }) => {
        const response = await request.post('/booking', {
            headers: {
                'Content-Type': 'application/json'
            }, 
            data: bookingDetail
            })
        const resBody = await response.json()
        console.log(response.statusText())
        console.log(resBody)
        // expect(resBody.bookingid).toBe(1720) - Not tested as booking ID will change for every run
        //both the comments down will work too instead of Line 35 and 36
        // expect(resBody.booking.firstname).toBe('Test')
        // expect(resBody.booking.lastname).toBe('User')
        expect(resBody.booking).toHaveProperty('firstname', 'Test')
        expect(resBody.booking).toHaveProperty('lastname', 'User')

        })

//POST Method to get the token

    test('Generate token for PUT/Delete', async ({ request}) => {
        const response = await request.post('http://restful-booker.herokuapp.com/auth', {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "username": "admin",
                "password": "password123"
            }
        })
        const resBody = await response.json()
        console.log(resBody.token)
    
    })

//PUT Method to update the data once token is received

    test.skip('To update booking details', async ({ request}) => {
        const response = await request.put('http://restful-booker.herokuapp.com/15', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': 'token=77dfaaf16d2e871'
                //'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=]' 
            },
            data: {
                "firstname": "Test",
                "lastname": "User"
            }
        })
        console.log(response.status())
        console.log(response.statusText())
    
    })

//PUT Method - ReqRes website
        test.skip('To update user', async ({ request}) => {
        const response = await request.put('https://reqres.in/api/users/2', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-api-key': 'reqres-free-v1'                
            },
            data: {
                "name": "TestUser",
                "job": "Automation Lead"
            }
        })
        const resBody = await response.json()
        console.log(response.status())
        expect(resBody.name).toBe('TestUser')
        expect(resBody.job).toBe('Automation Lead')
    
    })

//DELETE Method - ReqRes website
    test.only('To delete user', async ({ request}) => {
        const response = await request.delete('https://reqres.in/api/users/2', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-api-key': 'reqres-free-v1'                
            }
        })
        console.log(response.status())
        expect(response.status()).toBe(204)
       
    })

})