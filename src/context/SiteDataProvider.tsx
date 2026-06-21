import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useTina } from 'tinacms/dist/react'
import client from '../../tina/__generated__/client'
import staticData from '../../content/data.json'

type SiteData = typeof staticData

const SiteDataContext = createContext<SiteData>(staticData)

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [tinaProps, setTinaProps] = useState<{
    query: string
    variables: Record<string, string>
    data: Record<string, unknown>
  }>({
    query: '',
    variables: { relativePath: 'data.json' },
    data: { siteData: staticData },
  })

  useEffect(() => {
    // client.queries.siteData is available after `npm run dev` regenerates the client
    ;(client.queries as any)
      .siteData({ relativePath: 'data.json' })
      .then((result: typeof tinaProps) => setTinaProps(result))
      .catch(() => {})
  }, [])

  const { data } = useTina(tinaProps)

  return (
    <SiteDataContext.Provider value={((data as any).siteData ?? staticData) as SiteData}>
      {children}
    </SiteDataContext.Provider>
  )
}

export function useSiteData(): SiteData {
  return useContext(SiteDataContext)
}
