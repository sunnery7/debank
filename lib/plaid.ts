import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';


const config = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        Headers: {
            'PLAID-CLIENT-ID': '66506fad82f765001c6ec2ae',
            'PLAID-SECRET': 'ddab6ff151e92d5c922cd103d56b88'
        }
    }
})

export const plaidClient = new PlaidApi(config)



// 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
//             'PLAID-SECRET': process.env.PLAID_SECRET