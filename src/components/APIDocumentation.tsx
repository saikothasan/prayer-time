import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function APIDocumentation() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-4">
            The Prayer Times API provides accurate prayer times for any location worldwide. It's easy to use and can be
            integrated into various applications, websites, and services.
          </p>
          <h3 className="text-xl font-bold mb-2">Base URL</h3>
          <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded mb-4">
            https://prayer-time-api.pages.dev/api/prayer-times
          </code>
          <h3 className="text-xl font-bold mb-2">Authentication</h3>
          <p>
            Currently, the API does not require authentication. However, we recommend signing up for an API key to
            ensure uninterrupted service and higher rate limits in the future.
          </p>
        </TabsContent>
        <TabsContent value="endpoints">
          <h2 className="text-2xl font-bold mb-4">Endpoints</h2>
          <h3 className="text-xl font-bold mb-2">GET /api/prayer-times</h3>
          <p className="mb-4">Retrieve prayer times for a specific location and date.</p>
          <h4 className="text-lg font-bold mb-2">Query Parameters</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>city</strong> (required): The name of the city
            </li>
            <li>
              <strong>country</strong> (required): The name of the country
            </li>
            <li>
              <strong>date</strong> (optional): The date for prayer times (YYYY-MM-DD format). Defaults to current date
              if not provided.
            </li>
            <li>
              <strong>method</strong> (optional): The calculation method (0-14). Defaults to 2 (Islamic Society of North
              America)
            </li>
          </ul>
          <h4 className="text-lg font-bold mb-2">Response Format</h4>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            {`{
  "date": "01 May 2023",
  "timezone": "Europe/London",
  "timings": {
    "Fajr": "03:57",
    "Sunrise": "05:31",
    "Dhuhr": "13:01",
    "Asr": "16:57",
    "Maghrib": "20:31",
    "Isha": "22:05"
  }
}`}
          </pre>
        </TabsContent>
        <TabsContent value="examples">
          <h2 className="text-2xl font-bold mb-4">Examples</h2>
          <h3 className="text-xl font-bold mb-2">cURL</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-4">
            {`curl "https://prayer-time-api.pages.dev/api/prayer-times?city=London&country=United Kingdom&date=2023-05-01&method=2"`}
          </pre>
          <h3 className="text-xl font-bold mb-2">JavaScript (Fetch)</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-4">
            {`fetch('https://prayer-time-api.pages.dev/api/prayer-times?city=London&country=United Kingdom&date=2023-05-01&method=2')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
          </pre>
          <h3 className="text-xl font-bold mb-2">Python (Requests)</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
            {`import requests

url = 'https://prayer-time-api.pages.dev/api/prayer-times'
params = {
    'city': 'London',
    'country': 'United Kingdom',
    'date': '2023-05-01',
    'method': '2'
}

response = requests.get(url, params=params)
data = response.json()
print(data)`}
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  )
}

