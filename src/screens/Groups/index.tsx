import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import HighLight from "@components/HighLight";
import React from "react";
import { Container } from "./styles";

export default function Groups() {
  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}
