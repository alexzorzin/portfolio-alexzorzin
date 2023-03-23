export default async function handler(req, res) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxLBKjzAJqZ9bmCNmx2_XejeEUXLUz_TOM52lSMR4JGiLfdRl_Z6Zrx41zj62T6PWbW/exec");
    if (!response.ok) {
      console.error(response.statusText)
      return res.status(500).json({ error: 'API error' })
    }
    const projects = await response.json()

    return res.status(200).json({ projects })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })
  }
}

