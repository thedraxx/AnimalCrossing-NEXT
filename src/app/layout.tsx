import './globals.css'
import { Provider } from '@/components/provider/Provider'

export const metadata = {
  title: 'Welcome to MyNintendo Clon Account',
  description: 'This is a clon of MyNintendo Account using NEXT 13 for practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
