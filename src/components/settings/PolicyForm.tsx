
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(2, { message: "Policy title must be at least 2 characters" }),
  content: z.string().min(50, { message: "Policy content must be at least 50 characters" }),
  version: z.string().min(1, { message: "Version is required" }),
  effectiveDate: z.string().min(1, { message: "Effective date is required" }),
  isPublished: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

interface PolicyFormProps {
  onSuccess?: () => void;
  defaultValues?: Partial<FormValues>;
  policyType: string;
}

const PolicyForm = ({ onSuccess, defaultValues, policyType }: PolicyFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      title: `${policyType} Policy`,
      content: "",
      version: "1.0",
      effectiveDate: new Date().toISOString().split('T')[0],
      isPublished: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Policy form submitted:", values);
    
    toast({
      title: "Policy updated",
      description: `The ${policyType.toLowerCase()} policy has been updated successfully`,
    });
    
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Policy Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Policy Content</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={`Enter ${policyType.toLowerCase()} policy content...`} 
                  className="min-h-[300px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="version"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Version</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="effectiveDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Effective Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="isPublished"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Published Status</FormLabel>
                <FormDescription>
                  Whether this policy is currently published on the site
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <div className="pt-4 flex justify-end">
          <Button type="submit">Save Policy</Button>
        </div>
      </form>
    </Form>
  );
};

export default PolicyForm;
