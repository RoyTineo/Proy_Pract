-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 14-06-2023 a las 12:18:04
-- Versión del servidor: 10.6.12-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u416551059_db_loginfinity`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_detalle_oc`
--

CREATE TABLE `tb_detalle_oc` (
  `id_detalle_oc` int(11) NOT NULL,
  `nro_factura` varchar(8) NOT NULL,
  `nro_guia` varchar(5) NOT NULL,
  `estado_pago` varchar(10) NOT NULL,
  `fecha_pago` date NOT NULL,
  `monto_pagado` decimal(10,0) NOT NULL,
  `estado_detencion` varchar(15) NOT NULL,
  `fecha_detencion` date NOT NULL,
  `monto_detencion` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_orden_compra`
--

CREATE TABLE `tb_orden_compra` (
  `id_orden_compra` int(11) NOT NULL,
  `nro_orden_compra` varchar(7) NOT NULL,
  `nro_siaf` varchar(10) NOT NULL,
  `id_unidad_ejecutora` int(11) NOT NULL,
  `fecha_notificacion` date NOT NULL,
  `medio_notificacion` varchar(10) NOT NULL,
  `monto_oc` decimal(10,0) NOT NULL,
  `lugar_entrega` varchar(100) NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `estado_entrega` varchar(10) NOT NULL,
  `id_detalle_oc` int(11) NOT NULL,
  `estado_oc` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_unidad_ejecutora`
--

CREATE TABLE `tb_unidad_ejecutora` (
  `id_unidad_ejecutora` int(11) NOT NULL,
  `descripcion_ue` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tb_unidad_ejecutora`
--

INSERT INTO `tb_unidad_ejecutora` (`id_unidad_ejecutora`, `descripcion_ue`) VALUES
(1, 'GOBIERNO REGIONAL DE AYACUCHO'),
(2, 'PROYECTO ESPECIAL SIERRA CENTRO SUR'),
(5, 'UNIVERSIDAD NACIONAL DE SAN CRISTOBAL DE HUAMANGA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_detalle_oc`
--
ALTER TABLE `tb_detalle_oc`
  ADD PRIMARY KEY (`id_detalle_oc`);

--
-- Indices de la tabla `tb_orden_compra`
--
ALTER TABLE `tb_orden_compra`
  ADD PRIMARY KEY (`id_orden_compra`);

--
-- Indices de la tabla `tb_unidad_ejecutora`
--
ALTER TABLE `tb_unidad_ejecutora`
  ADD PRIMARY KEY (`id_unidad_ejecutora`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_unidad_ejecutora`
--
ALTER TABLE `tb_unidad_ejecutora`
  MODIFY `id_unidad_ejecutora` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
