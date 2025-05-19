import React, { useState } from 'react';
import { submitReport } from '../../api/reportService';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

const ReportModal = ({ review, onClose, fetchReviews }) => {
  const [reportType, setReportType] = useState('');
  const [reason, setReason] = useState('');
  const [reportUserName] = useState(review.username);
  const [reportUserEmail] = useState(review.email);
  const [reportedBy] = useState(localStorage.getItem('email'));

  // State variables for errors and loading state
  const [reportTypeError, setReportTypeError] = useState('');
  const [reasonError, setReasonError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setReportTypeError('');
    setReasonError('');

    // Validate fields
    let hasError = false;
    if (!reportType) {
      setReportTypeError('This field is required');
      hasError = true;
    }
    if (!reason) {
      setReasonError('This field is required');
      hasError = true;
    }

    // If there are errors, stop submission
    if (hasError) {
      setLoading(false); // Ensure loading state is reset if there are errors
      return;
    }

    // Start loading state
    setLoading(true);

    // Proceed with submission
    const reportData = {
      reportType,
      reason,
      reportUserName,
      reportUserEmail,
      reportedBy,
      reviewId: review._id,
    };

    try {
      await submitReport(reportData);
      onClose();
      fetchReviews();
    } catch (error) {
      console.error('Error submitting report:', error);
    } finally {
      // Ensure loading state remains for at least 1 second
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const textFieldSx = {
    marginBottom: '16px',
    '& .MuiInputBase-input': { color: '#ccc' },
    '& .MuiInputLabel-root': { color: '#ccc' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#555' },
      '&:hover fieldset': { borderColor: '#777' },
      '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
    },
  };

  const errorTextFieldSx = {
    ...textFieldSx,
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'red' },
    },
  };

  const disabledTextFieldSx = {
    ...textFieldSx,
    '& .MuiInputBase-input.Mui-disabled': { color: '#999', WebkitTextFillColor: '#999' },
    '& .MuiInputLabel-root.Mui-disabled': { color: '#999' },
  };

  const selectFieldSx = {
    marginBottom: '16px',
    '& .MuiInputBase-input': { color: '#ccc' },
    '& .MuiInputLabel-root': { color: '#ccc' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#555' },
      '&:hover fieldset': { borderColor: '#777' },
      '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
    },
    '& .MuiSelect-icon': { color: '#ccc' }, // Icon color
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="bg-gray-800 text-white w-96 p-4 rounded-lg z-50 relative">
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ color: 'white', position: 'absolute', top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <h2 className="text-lg font-semibold mb-4">Report Review</h2>
        <div className="mb-3">
          <p className="font-semibold">Reported User: {review.username}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ marginBottom: '16px' }} error={!!reportTypeError}>
            <InputLabel id="report-type-label">Report Type</InputLabel>
            <Select
              labelId="report-type-label"
              value={reportType}
              onChange={(e) => {
                setReportType(e.target.value);
                setReportTypeError(''); // Clear error on change
              }}
              fullWidth
              sx={reportTypeError ? errorTextFieldSx : selectFieldSx}
            >
              <MenuItem value="spam">Spam</MenuItem>
              <MenuItem value="abuse">Abuse</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {reportTypeError && (
              <div className="text-red-500 text-xs mt-1">This field is required</div>
            )}
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: '16px' }} error={!!reasonError}>
            <TextField
              label="Reason"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                setReasonError(''); // Clear error on change
              }}
              sx={reasonError ? errorTextFieldSx : textFieldSx}
            />
            {reasonError && (
              <div className="text-red-500 text-xs mt-1">This field is required</div>
            )}
          </FormControl>

          <TextField
            type="text"
            label="Reported User Name"
            variant="outlined"
            fullWidth
            value={reportUserName}
            disabled
            readOnly
            className="mb-3"
            sx={disabledTextFieldSx}
          />
          <TextField
            type="email"
            label="Reported User Email"
            variant="outlined"
            fullWidth
            value={reportUserEmail}
            disabled
            readOnly
            className="mb-3"
            sx={disabledTextFieldSx}
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-blue-500 text-white hover:bg-blue-600"
            disabled={loading} // Disable button while loading
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null} // Show loading icon
          >
            {loading ? 'Submitting...' : 'Submit Report'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
