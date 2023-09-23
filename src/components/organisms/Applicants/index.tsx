import { FC } from "react";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA, JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import ButtonActionTable from "../ButtonActionTable";

interface ApplicantsProps {}

const Applicants: FC<ApplicantsProps> = ({  }) => {
	return (
        <Table>
          <TableCaption>Job Listings</TableCaption>
          <TableHeader>
            <TableRow>
              {JOB_APPLICANT_COLUMNS.map((item: any, i: number) => (
                <TableHead key={item + i}>{item}</TableHead>
              ))}
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {JOB_APPLICANT_DATA.map((item: any, i: number) => (
              <TableRow key={item.name + i}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {item.appliedDate}
                </TableCell>             
                <TableCell>
                  <ButtonActionTable url=""/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
	);
};

export default Applicants;
