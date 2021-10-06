/*
 Navicat Premium Data Transfer

 Source Server         : my
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : test_db

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 06/10/2021 18:11:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for table_column
-- ----------------------------
DROP TABLE IF EXISTS `table_column`;
CREATE TABLE `table_column`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `des` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table_column
-- ----------------------------
INSERT INTO `table_column` VALUES (1, '今日说唱家第一季', '今日说唱，主持人是蜡笔小新，今晚八点在呆毛频道播出！', 'http://localhost/assets/xiaoxin1.jpg', '2021-09-09 11:22:49');
INSERT INTO `table_column` VALUES (3, '农夫欧可能', '农夫替牛解下犁套，牵着它去喝水。这时，有只穷凶极恶的饿狼正出来觅食', 'http://localhost/assets/xiaoxin3.jpg', '2021-09-10 11:26:24');
INSERT INTO `table_column` VALUES (4, '东方落落大方', '是谁惊动了她？我回头望去，只见一轮红日正在缓缓滑落，将东方的天空染得通红。', 'http://localhost/assets/xiaoxin4.jpg', '2021-09-01 15:30:36');
INSERT INTO `table_column` VALUES (5, '基督教佛也慢慢', '开放就服你吃的没想好DNF饱餐一顿果然博大考什么厂家发你的现在忙你的内心', 'http://localhost/assets/xiaoxin5.jpg', '2021-09-05 15:30:42');

-- ----------------------------
-- Table structure for table_post
-- ----------------------------
DROP TABLE IF EXISTS `table_post`;
CREATE TABLE `table_post`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `editor` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` datetime NULL DEFAULT NULL,
  `columnId` int UNSIGNED NOT NULL,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table_post
-- ----------------------------
INSERT INTO `table_post` VALUES (1, '标题标题', '内容内容内容', 'http://localhost/assets/post01.jpg', NULL, '2021-09-14 15:42:21', 1);
INSERT INTO `table_post` VALUES (2, '标题标题标题', '内容那个人工来到家乐福解决晚饭', NULL, NULL, '2021-09-18 15:43:51', 2);
INSERT INTO `table_post` VALUES (3, '分局饿哦灭你', '尔特辅导费而非热痱粉', NULL, NULL, '2021-09-17 15:44:29', 1);
INSERT INTO `table_post` VALUES (10, '标题', '内容内容', '', '', '2021-10-03 16:05:29', 3);
INSERT INTO `table_post` VALUES (11, '标题标题标题党', '人们对内容营销的理解的最大bug，正在于对“内容”二字的理解。', '', '', '2021-10-04 01:51:47', 2);

-- ----------------------------
-- Table structure for table_user
-- ----------------------------
DROP TABLE IF EXISTS `table_user`;
CREATE TABLE `table_user`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table_user
-- ----------------------------
INSERT INTO `table_user` VALUES (1, '呆毛', 'daimao@test.com', '123456');
INSERT INTO `table_user` VALUES (6, 'dfour', '111@test.com', '123456');

SET FOREIGN_KEY_CHECKS = 1;
