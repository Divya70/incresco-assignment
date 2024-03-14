function generateRandomKey(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let randomKey = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomKey += characters.charAt(randomIndex)
  }

  return randomKey
}
export const FilterMockData =[
    {
        "companies":[
            { key: generateRandomKey(5), "companyName": "Amazon" },
            { key: generateRandomKey(5), "companyName": "CVS Health" },
            { key: generateRandomKey(5), "companyName": "Toyota" },
            { key: generateRandomKey(5), "companyName": "Apple" }
          ],
          "locations":[
            { key: generateRandomKey(5), "locationName": "Mumbai" },
            { key: generateRandomKey(5), "locationName": "Chandigarh" },
            { key: generateRandomKey(5), "locationName": "Karnataka" },
            { key: generateRandomKey(5), "locationName": "Bangalore" }
          ],
          "datePostedOptions":[
            {key:generateRandomKey(5),"datePosted":"Last 24 hours"},
            {key:generateRandomKey(5),"datePosted":"Last 48 hours"},
            {key:generateRandomKey(5),"datePosted":"Last 7 days"},
            {key:generateRandomKey(5),"datePosted":"Last 14 days"},
            {key:"13","datePosted":"Last month"}
          ],
          "salaryRangeOptions":[
            {key:generateRandomKey(5),"salary":"3 Lakh+"},
            {key:generateRandomKey(5),"salary":"6 Lakh+"},
            {key:generateRandomKey(5),"salary":"10 Lakh+"},
            {key:generateRandomKey(5),"salary":"15 Lakh+"},
            {key:generateRandomKey(5),"salary":"25 Lakh+"}
            
          ],
          "skillsOptions":[
            {key:generateRandomKey(5),"skill":"Javascript"},
            {key:generateRandomKey(5),"skill":"Machine learning"},
            {key:generateRandomKey(5),"skill":"JQuery"},
            {key:generateRandomKey(5),"skill":"Artificial intelligence"},
            {key:generateRandomKey(5),"skill":"25 Lakh+"}
          ],
          "experienceOptions":[
            {key:generateRandomKey(5),"experienceOptions":"0-2 years"},
            {key:generateRandomKey(5),"experienceOptions":"3-5 years"},
            {key:generateRandomKey(5),"experienceOptions":"5-8 years"},
            {key:generateRandomKey(5),"experienceOptions":"Above 8 years"}
            
          ],
          "educationOptions":[
            {key:generateRandomKey(5),"educationOption":"Bachelors"},
            {key:generateRandomKey(5),"educationOption":"Masters"},
            {key:generateRandomKey(5),"educationOption":"PHD"},
            {key:generateRandomKey(5),"educationOption":"Diploma"}
        ]
    }
        
    ]
    
