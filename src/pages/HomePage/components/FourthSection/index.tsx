import { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { BankingQR } from "./FourthSection.styled";

export default function FourthSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", isJoin: "Có", message: "" });

  const handleInputChange: TextFieldProps["onChange"] = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSelectChange: SelectProps["onChange"] = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim()) {
      setStatus("failedValidation");
    } else {
      setStatus("loading");
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("isJoin", form.isJoin);
      formData.append("message", form.message);
      fetch(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          setStatus("success");
        })
        .catch((error) => {
          console.error(error);
          setStatus("error");
        });
    }
  };

  const handleCloseDialog = () => {
    setStatus("idle");
    setForm({ name: "", isJoin: "Có", message: "" });
  };

  const handleCloseDialogOnly = () => {
    setStatus("idle");
  };

  return (
    <Box>
      <Grid2 container spacing={4} mb={4}>
        <Grid2 size={{ xs: 12 }}>
          <Typography variant="h3" textAlign="center">
            Sự hiện diện của bạn là một món quà vô giá
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="name"
              margin="dense"
              label="Tên của bạn là gì?"
              value={form.name}
              onChange={handleInputChange}
              disabled={status === "loading"}
            />
            <FormControl fullWidth required margin="dense">
              <InputLabel id="options">
                Bạn có tham dự với chúng tôi không?
              </InputLabel>
              <Select
                id="options-dropdown"
                labelId="options"
                name="isJoin"
                label="Bạn có tham dự với chúng tôi không?"
                value={form.isJoin}
                onChange={handleSelectChange}
                disabled={status === "loading"}
              >
                <MenuItem value="Có">Có</MenuItem>
                <MenuItem value="Không">Không</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              multiline
              name="message"
              margin="dense"
              rows="6"
              label="Hãy để lại lời chúc cho chúng tôi nhé!"
              value={form.message}
              onChange={handleInputChange}
              disabled={status === "loading"}
            />
            <Button
              fullWidth
              type="submit"
              size="large"
              variant="contained"
              loading={status === "loading"}
            >
              Gửi lời chúc
            </Button>
          </form>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} mt={1}>
          <Card>
            <BankingQR
              src="/vcb-ck.jpeg"
              alt="Vietcombank QR code"
              loading="lazy"
            />
            <Typography
              variant="button"
              display="block"
              textAlign="center"
              mt={1}
            >
              VIETCOMBANK
            </Typography>
            <Typography
              variant="button"
              display="block"
              textAlign="center"
              mb={1}
            >
              NGUYEN MANH THANG
            </Typography>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }} mt={1}>
          <Card>
            <BankingQR
              src="/vcb-vk.jpeg"
              alt="Vietcombank QR code"
              loading="lazy"
            />
            <Typography
              variant="button"
              display="block"
              textAlign="center"
              mt={1}
            >
              VIETCOMBANK
            </Typography>
            <Typography
              variant="button"
              display="block"
              textAlign="center"
              mb={1}
            >
              TRAN THI HONG NGOC
            </Typography>
          </Card>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="button" display="block">
            Nhà Trai: 038 988 4507
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2271.1557014974255!2d106.0194163!3d20.5878321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c58dab6a3ebd%3A0xe833d64a18af8b78!2zQmktYSBDaMawxqFuZw!5e1!3m2!1svi!2s!4v1739647695690!5m2!1svi!2s"
            width="100%"
            height="450"
            className="map-iframe"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="button" display="block">
            Nhà Gái: 094 108 6659
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4544.981946967032!2d106.1338174!3d20.4979673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135dd3f6f7f2321%3A0xdb53af41d019c18f!2zUXXhuqd5IFRodeG7kWMgVMOieSBNYWkgQW4!5e1!3m2!1svi!2s!4v1739647801659!5m2!1svi!2s"
            width="100%"
            height="450"
            className="map-iframe"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          />
        </Grid2>
      </Grid2>
      <Dialog
        open={status === "success"}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          <DialogContentText>Cảm ơn bạn đã gửi lời chúc nha!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Đóng</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={status === "error"}
        onClose={handleCloseDialogOnly}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Đã có lỗi xảy ra, vui lòng thử lại sau
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogOnly}>Đóng</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={status === "failedValidation"}
        onClose={handleCloseDialogOnly}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Thông báo</DialogTitle>
        <DialogContent>
          <DialogContentText>Vui lòng nhập tên của bạn</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogOnly}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

type Status = "idle" | "failedValidation" | "loading" | "success" | "error";
