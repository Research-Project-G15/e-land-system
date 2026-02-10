const axios = require('axios');

const testExternalLogin = async () => {
    try {
        console.log('🧪 Testing External User Login...');
        
        const testCredentials = [
            { username: 'dilshi126', password: 'lawyer123', name: 'Dilshi Piyumika' },
            { username: 'notary1', password: 'notary123', name: 'Jane Smith' },
            { username: 'dasunwije', password: 'notary123', name: 'Dasun Wijesinghe' }
        ];

        for (const cred of testCredentials) {
            console.log(`\n--- Testing ${cred.name} (${cred.username}) ---`);
            
            try {
                const response = await axios.post('http://localhost:5000/api/auth/login', {
                    username: cred.username,
                    password: cred.password
                });

                if (response.data.user.userType === 'external') {
                    console.log(`✅ SUCCESS: ${cred.name} logged in successfully`);
                    console.log(`   Role: ${response.data.user.role}`);
                    console.log(`   UserType: ${response.data.user.userType}`);
                    console.log(`   Profession: ${response.data.user.profession}`);
                } else {
                    console.log(`❌ FAILED: User is not external type`);
                }
            } catch (error) {
                console.log(`❌ FAILED: ${error.response?.data?.message || error.message}`);
            }
        }

        console.log('\n=== 🎯 Test Complete ===');
        console.log('If all tests passed, external login should work in the browser!');
        
    } catch (error) {
        console.error('Test error:', error.message);
    }
};

testExternalLogin();