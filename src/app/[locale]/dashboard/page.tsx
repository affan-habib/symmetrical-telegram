import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
          <CardDescription>Revenue this month</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$45,231.89</p>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Subscriptions</CardTitle>
          <CardDescription>Active subscriptions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+2350</p>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Sales</CardTitle>
          <CardDescription>Total sales this month</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+12,234</p>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Active Now</CardTitle>
          <CardDescription>Active users right now</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+573</p>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
  );
}