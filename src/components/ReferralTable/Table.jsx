import * as React from 'react';

import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from '@mui/material';

import referralData from '../../service/referralsData.json';
import { Container } from '../Container/Container';
import {
    StyledStatusMessage,
    StyledTableCell,
    StyledReferralDebit,
    StyledUserName,
    StyledReferralDate,
    StyledReferralHead,
    StyledUserEmail,
} from './StyledTable';
import { colorVariables } from 'utils/color';


export default function ReferralTable() {   
    return (
        <>
            <StyledReferralHead>Referrals - {referralData.length}</StyledReferralHead>
            <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Referral event</StyledTableCell>
                            <StyledTableCell align="left">Advocate</StyledTableCell>
                            <StyledTableCell align="left">Friend</StyledTableCell>
                            <StyledTableCell align="left">Referral status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {referralData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row" align="left">
                                    {row.referral.referralName}
                                    <StyledReferralDate>{row.referral.referralDate}</StyledReferralDate>
                                    <StyledReferralDebit>{row.referral.referralDebit}</StyledReferralDebit>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <Tooltip title={row.advocate.advocateEmail} placement="right-start">
                                        <StyledUserEmail>{row.advocate.advocateEmail}</StyledUserEmail>
                                    </Tooltip>
                                    <StyledUserName>{row.advocate.advocateName}</StyledUserName>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <Tooltip title={row.friend.friendEmail} placement="right-start">
                                        <StyledUserEmail>{row.friend.friendEmail}</StyledUserEmail>
                                    </Tooltip>
                                    <StyledUserName>{row.friend.friendName}</StyledUserName>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    {row.status.statusName}
                                    <StyledStatusMessage sx={{ color: row.status.statusMessage === "Marked as fraud" ? colorVariables.redColor : colorVariables.lightGrey }}>{row.status.statusMessage}</StyledStatusMessage>
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </>
  );
}
