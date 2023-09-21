import { Box, TableCell, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { colorVariables } from 'utils/color';

export const StyledReferralHead = styled(Typography)({
    color: colorVariables.veryDarkGrey,
    fontWeight: 700,
    fontSize: '25px',
    padding: '40px 30px 10px 15px'
});

export const StyledTableCell = styled(TableCell)({
    color: colorVariables.veryDarkGrey,
    fontWeight: 600,
    fontSize: '15px',
});

export const StyledStatusMessage = styled(Box)({
    fontWeight: 400,
    fontSize: '14px',
    marginTop: '5px',
    marginBottom: '35px',
    "@media (max-width:640px)": {
        whiteSpace: 'nowrap'
    },
});

export const StyledReferralDate = styled(Box)({
    color: colorVariables.lightGrey,
    fontWeight: 400,
    fontSize: '14px',
    marginTop: '10px',
    "@media (max-width:640px)": {
        whiteSpace: 'nowrap'
    },
});

export const StyledUserEmail = styled(Box)({
    color: colorVariables.veryDarkGrey,
    fontWeight: 600,
    fontSize: '15px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '150px'
});

export const StyledReferralDebit = styled(Box)({
    color: colorVariables.veryDarkGrey,
    fontWeight: 700,
    fontSize: '16px',
    marginTop: '5px',
    marginBottom: '5px'
});

export const StyledUserName = styled(Box)({
    color: colorVariables.veryDarkGrey,
    fontWeight: 400,
    fontSize: '15px',
    marginTop: '5px',
    marginBottom: '35px'
});
