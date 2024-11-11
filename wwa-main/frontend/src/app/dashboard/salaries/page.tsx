/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oAqCUEKaOQB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Component() {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-6">Teacher Salaries</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-muted text-muted-foreground">
              <th className="px-4 py-3 text-left font-medium">Teacher</th>
              <th className="px-4 py-3 text-right font-medium">
                Monthly Salary
              </th>
              <th className="px-4 py-3 text-right font-medium">Paid Months</th>
              <th className="px-4 py-3 text-right font-medium">Total Paid</th>
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
                <div>John Smith</div>
                <div className="text-sm text-muted-foreground">
                  johnsmith@school.edu
                </div>
              </td>
              <td className="px-4 py-3 text-right">$5,000.00</td>
              <td className="px-4 py-3 text-right">5</td>
              <td className="px-4 py-3 text-right text-primary font-medium">
                $25,000.00
              </td>
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
                <div>Jane Doe</div>
                <div className="text-sm text-muted-foreground">
                  janedoe@school.edu
                </div>
              </td>
              <td className="px-4 py-3 text-right">$4,500.00</td>
              <td className="px-4 py-3 text-right">7</td>
              <td className="px-4 py-3 text-right text-primary font-medium">
                $31,500.00
              </td>
              <td className="px-4 py-3 text-right">
                <Badge variant="outline" className="bg-green-500 text-white">
                  Paid
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">2023-06-01</td>
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
                  michaelj@school.edu
                </div>
              </td>
              <td className="px-4 py-3 text-right">$4,800.00</td>
              <td className="px-4 py-3 text-right">3</td>
              <td className="px-4 py-3 text-right text-primary font-medium">
                $14,400.00
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
                  emilyd@school.edu
                </div>
              </td>
              <td className="px-4 py-3 text-right">$4,200.00</td>
              <td className="px-4 py-3 text-right">1</td>
              <td className="px-4 py-3 text-right text-primary font-medium">
                $4,200.00
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
                  davidlee@school.edu
                </div>
              </td>
              <td className="px-4 py-3 text-right">$4,700.00</td>
              <td className="px-4 py-3 text-right">7</td>
              <td className="px-4 py-3 text-right text-primary font-medium">
                $32,900.00
              </td>
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
