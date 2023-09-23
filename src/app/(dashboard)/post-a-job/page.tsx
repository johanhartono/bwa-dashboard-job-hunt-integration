"use client";

import { jobFormSchema } from "@/lib/form-schema";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FieldInput from "@/components/organisms/FieldInput";
import { Input } from "@/components/ui/input"; 
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { JOBTYPES } from "@/constants";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InputSkills from "@/components/organisms/InputSkills";
import CKEditor from "@/components/organisms/CKEditor";
import InputBenefits from "@/components/organisms/InputBenefits";
import { Button } from "@/components/ui/button";
interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  useEffect(()=> {
    setEditorLoaded(true);
  },[]);
  
  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="w-7 h-7" />
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>

      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          List out your top perks and benefits.
        </div>
      </div>

      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          {/* Job Title */}

          <FieldInput
            title="Job Title"
            subtitle="Job titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="e.g. Software Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At least 80 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <Separator />
          {/* Type of Employment */}

          <FieldInput
            title="Type of Employment"
            subtitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem
                          key={item + i}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <Separator />

          {/* Salary */}
          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary range for the role."
          >
            <div className="w[450px] flex flex-row justify-between items-center">
            <FormField
              control={form.control}
              name="salaryFrom"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="w-full" placeholder="$100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span className="text-center">To</span>
            <FormField
              control={form.control}
              name="salaryTo"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="w-full" placeholder="$1000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
          </FieldInput>
          <Separator />
          {/* Category */}
          <FieldInput
						title="Categories"
						subtitle="You can select job categories"
					>
						<FormField
							control={form.control}
							name="categoryId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Select Job Categories</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="w-[450px]">
												<SelectValue placeholder="Select Job Categories" />
											</SelectTrigger>
										</FormControl>
                    <SelectContent>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                      </SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>
          <Separator />
          {/* Required Skills */} 
          <FieldInput
						title="Required Skills"
						subtitle="Add required skills for the job"
					>
						<InputSkills
							form={form}
							name="requiredSkills"
							label="Add Skills"
						/>
					</FieldInput> 
          <Separator />
          {/* Job Descriptions*/} 
					<FieldInput
						title="Job Descriptions"
						subtitle="Job titles must be describe one position"
					>
						<CKEditor
							form={form}
							name="jobDescription"
              editorLoaded={editorLoaded}
						/>
					</FieldInput>  
          <Separator />
          {/* Job Reponsibilities*/} 
					<FieldInput
						title="Job Reponsibilities"
						subtitle="Outline the core responsibilites of the position"
					>
						<CKEditor
							form={form}
							name="responsiblity"
              editorLoaded={editorLoaded}
						/>
					</FieldInput> 
          <Separator />
          {/* Who you are*/} 
					<FieldInput
						title="Who you are"
						subtitle="Add your prefered candidates qualifications"
					>
						<CKEditor
							form={form}
							name="whoYouAre"
              editorLoaded={editorLoaded}
						/>
					</FieldInput> 
          <Separator />
          {/* Nice to haves*/} 
					<FieldInput
						title="Nice-To-Haves"
						subtitle="Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply"
					>
						<CKEditor
							form={form}
							name="niceToHaves"
              editorLoaded={editorLoaded}
						/>
					</FieldInput> 
          <Separator />
          {/* Add benefits*/} 
					<FieldInput
						title="Perks and Benefits"
						subtitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees"
					>
						<InputBenefits form={form} />
					</FieldInput>

					<div className="flex justify-end">
						<Button size="lg">Do a Review</Button>
					</div>
        </form>
      </Form>
    </div>
  );
};

export default PostJobPage;
