import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FifthSection = () => {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 min-h-screen"
      id="pricing"
    >
      <h1 className="text-4xl md:text-5xl py-4 px-4">Pricing</h1>
      <h3 className="text-xl px-4 text-balance">
        Choose the plan that best fits your business needs. Our flexible pricing
        options offer a range of features, from basic to advanced. Enjoy
        unlimited products, customizable themes, and advanced analytics. <br />
        Start selling online today!
      </h3>
      <Tabs
        defaultValue="free"
        className="w-[350px] md:max-w-[800px] lg:min-w-[900px] mx-auto mt-12"
        orientation="horizontal"
      >
        <TabsList className="grid w-full max-md:h-[6.75rem] grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="free">Free</TabsTrigger>
          <TabsTrigger value="premium">Premium</TabsTrigger>
          <TabsTrigger value="platinum">Platinum</TabsTrigger>
        </TabsList>
        <TabsContent value="free">
          <Card>
            <CardHeader>
              <CardTitle>Free Plan</CardTitle>
              <CardDescription>
                Basic features for small businesses starting out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="my-8">
                <span className="text-5xl">$0</span> / month
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Basic features:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Product listing, search, and basic product information.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Limited storage:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Storage for a limited number of products.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Basic analytics:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Limited analytics to track store performance.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <X className="mr-2 text-red-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  No customization:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  No customization options for the store.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <X className="mr-2 text-red-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  No customer support:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  No dedicated customer support.
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Start for free</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="premium">
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
              <CardDescription>
                Enhanced features for growing businesses with more needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="my-8">
                <span className="text-5xl">$25</span> / month
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Enhanced features:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Advanced product features, including variations and options.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Increased storage:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  More storage for products and media.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Detailed analytics:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  In-depth analytics to track sales and customer behavior.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Customization options:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Basic customization options for the store's appearance.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Priority customer support:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Priority customer support for inquiries and issues.
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Upgrade Now</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="platinum">
          <Card>
            <CardHeader>
              <CardTitle>Platinum Plan</CardTitle>
              <CardDescription>
                Comprehensive plan for large businesses with advanced
                requirements.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="my-8">
                <span className="text-5xl">$45</span> / month
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  All features:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Access to all features, including advanced product options and
                  customization.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Unlimited storage:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Unlimited storage for products and media.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Advanced analytics:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Advanced analytics tools for in-depth insights into sales and
                  marketing.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Full customization:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Complete customization control over the store's design and
                  layout.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Dedicated account manager:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  A dedicated account manager for personalized support and
                  advice.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Marketing tools:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Integrated marketing tools for email campaigns, social media,
                  and SEO.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  White label options:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  White label options for a branded shopping experience.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Exclusive features:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Access to exclusive features and early access to new updates.
                </span>
              </div>
              <div className="space-y-1 flex justify-start items-center">
                <Check className="mr-2 text-green-600 pt-2 font-bold" />
                <span className="font-semibold inline-block">
                  Priority shipping:
                </span>
                <span className="ml-2 text-light text-sm hidden lg:flex">
                  Priority shipping options for orders placed through the store.
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Upgrade Now</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default FifthSection;
