import React from 'react'
import { Button } from '../../ui/Button/Button'
import { getAccessToken } from '../../helpers/getAccessToken'

export const GetPermissionsPage = () => {
    return (
        <div className="container container-md text-center" >
            <h1>First, we'll need your approval to access to your data</h1>
            <p>To use Jammming for creating your next awesome playlist, give Jammming access to your personal account's data, such as playlist, user info, etc</p>
            <Button
                eventHandler={ getAccessToken }
                customClasses={ ["mt-4"] }
            >
                Log In To Your Account
            </Button>
        </div>
    )
}
