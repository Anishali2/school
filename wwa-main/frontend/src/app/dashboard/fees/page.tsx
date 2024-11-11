/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BIpN6WQv2xc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Component() {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-6">Student Fees</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-muted text-muted-foreground">
              <th className="px-4 py-3 text-left font-medium">Student</th>
              <th className="px-4 py-3 text-right font-medium">Monthly Fee</th>
              <th className="px-4 py-3 text-right font-medium">
                Pending Months
              </th>
              <th className="px-4 py-3 text-right font-medium">Total Owed</th>
              <th className="px-4 py-3 text-right font-medium">
                Payment Status
              </th>
              <th className="px-4 py-3 text-right font-medium">Last Payment</th>
              <th className="px-4 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">
                <div>John Doe</div>
                <div className="text-sm text-muted-foreground">
                  johndoe@example.com
                </div>
              </td>
              <td className="px-4 py-3 text-right">$50.00</td>
              <td className="px-4 py-3 text-right">2</td>
              <td className="px-4 py-3 text-right text-primary font-medium">
                $100.00
              </td>
              <td className="px-4 py-3 text-right">
                <Badge variant="outline" className="bg-red-500 text-white">
                  Overdue
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">2023-04-15</td>
              <td className="px-4 py-3 text-right">
                <Button variant="outline" size="sm">
                  Pay Now
                </Button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">
                <div>Jane Smith</div>
                <div className="text-sm text-muted-foreground">
                  janesmith@example.com
                </div>
              </td>
              <td className="px-4 py-3 text-right">$75.00</td>
              <td className="px-4 py-3 text-right">0</td>
              <td className="px-4 py-3 text-right">$0.00</td>
              <td className="px-4 py-3 text-right">
                <Badge variant="outline" className="bg-green-500 text-white">
                  Paid
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">2023-05-01</td>
              <td className="px-4 py-3 text-right">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">
                <div>Michael Johnson</div>
                <div className="text-sm text-muted-foreground">
                  michaelj@example.com
                </div>
              </td>
              <td className="px-4 py-3 text-right">$60.00</td>
              <td className="px-4 py-3 text-right">3</td>
              <td className="px-4 py-3 text-right text-primary font-medium">
                $180.00
              </td>
              <td className="px-4 py-3 text-right">
                <Badge variant="outline" className="bg-yellow-500 text-white">
                  Pending
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">2023-03-01</td>
              <td className="px-4 py-3 text-right">
                <Button variant="outline" size="sm">
                  Pay Now
                </Button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">
                <div>Emily Davis</div>
                <div className="text-sm text-muted-foreground">
                  emilyd@example.com
                </div>
              </td>
              <td className="px-4 py-3 text-right">$45.00</td>
              <td className="px-4 py-3 text-right">1</td>
              <td className="px-4 py-3 text-right text-primary font-medium">
                $45.00
              </td>
              <td className="px-4 py-3 text-right">
                <Badge variant="outline" className="bg-yellow-500 text-white">
                  Pending
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">2023-04-30</td>
              <td className="px-4 py-3 text-right">
                <Button variant="outline" size="sm">
                  Pay Now
                </Button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">
                <div>David Lee</div>
                <div className="text-sm text-muted-foreground">
                  davidlee@example.com
                </div>
              </td>
              <td className="px-4 py-3 text-right">$55.00</td>
              <td className="px-4 py-3 text-right">0</td>
              <td className="px-4 py-3 text-right">$0.00</td>
              <td className="px-4 py-3 text-right">
                <Badge variant="outline" className="bg-green-500 text-white">
                  Paid
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">2023-05-01</td>
              <td className="px-4 py-3 text-right">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
