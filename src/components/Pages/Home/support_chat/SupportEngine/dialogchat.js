import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Avatar from './Avatar';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';



const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      position: 'right',
      padding: theme.spacing(0.01),
      
    },
    closeButton: {
      position: 'relative',
      right: theme.spacing(0.01),
      top: theme.spacing(0.01),
      color: theme.palette.grey[500],
    },
  });


export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    position: 'right',
    padding: theme.spacing(0.01),

  },
}))(MuiDialogContent);


export default function CustomizedDialogs({children}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar 
                onClick={handleClickOpen}
               
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                }}
                
            />  
      <Dialog 
      open={open}
      onClose={handleClose}
     
      aria-labelledby="draggable-dialog-title">
        <DialogTitle id="customized-dialog-title" onClose={handleClickOpen}>
        
        </DialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
