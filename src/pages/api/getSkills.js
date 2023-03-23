export default async function handler(req, res) {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbw3umdiN-esCNVkub5YmaPjYjRtfftlVJf1hAPf7zwZ4TMn3iQZgH77ZEI-REooX7TT/exec");
      if (!response.ok) {
        console.error(response.statusText)
        return res.status(500).json({ error: 'API error' })
      }
      const skills = await response.json()
  
      return res.status(200).json({ skills })
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: e })
    }
  }
  