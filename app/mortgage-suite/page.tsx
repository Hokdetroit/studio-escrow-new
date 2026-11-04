import { SuitePage } from '@/components/suites/suite-page'
import { routeMetadata } from '@/lib/routes'

export const metadata = routeMetadata('mortgageSuite')

export default function MortgageSuitePage() {
  return <SuitePage kind="mortgage" />
}
